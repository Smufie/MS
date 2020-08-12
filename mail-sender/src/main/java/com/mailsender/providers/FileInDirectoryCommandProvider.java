package com.mailsender.providers;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.mailsender.handlers.CommandContext;

public class FileInDirectoryCommandProvider implements CommandProvider {

	private final NewCommandListener listener;
	private final String pathToMonitoredFolder;
	private static WatchService watcher;
	private Map<WatchKey, Path> keyMap;
	
	private static final Logger logger = LogManager.getLogger(FileInDirectoryCommandProvider.class);

	public FileInDirectoryCommandProvider(String pathToMonitoredFolder, NewCommandListener listener) throws IOException {
		this.pathToMonitoredFolder = pathToMonitoredFolder;
		this.listener = listener;
		setupWatchService();
	}
	
	public void setupWatchService() throws IOException {
		
		watcher = FileSystems.getDefault().newWatchService();
		keyMap = new HashMap<WatchKey, Path>();
		Path path = Paths.get(pathToMonitoredFolder);
		keyMap.put(path.register(watcher, 
				StandardWatchEventKinds.ENTRY_CREATE
				), path);
	}

	public void start(CommandContext context) throws IOException, InterruptedException {
		WatchKey watchKey;
		logger.info("Setup complete. Monitoring folder: " + pathToMonitoredFolder);
		
		do {	
			watchKey = watcher.take();
			Path eventDir = keyMap.get(watchKey);
			for (WatchEvent<?> event : watchKey.pollEvents()) {
				WatchEvent.Kind<?> kind = event.kind();
				Path eventPath = (Path)event.context();
				
				if (kind.equals(StandardWatchEventKinds.ENTRY_CREATE)) {
					logger.info("New text orders: " + eventPath + " have arrived.");
					String commandLine;
					File fileOrders = new File(eventDir + "\\" + eventPath);
					Scanner scanner = new Scanner(fileOrders);
					
					while(scanner.hasNextLine()) {
						commandLine = scanner.nextLine();
						listener.onNewCommand(commandLine, context);
					}
					scanner.close();
					logger.info("Text orders: " + eventPath + " completed. Waiting for new orders.");
					break;
				}
			}
			
		} while(watchKey.reset());	
	}	
}
