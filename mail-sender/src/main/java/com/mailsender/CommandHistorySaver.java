package com.mailsender;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class CommandHistorySaver {
	
	private static final File commandHistory = new File(
			"C:\\Users\\Jan\\eclipse-workspace\\mail-sender"
			+ "\\orderhistory.txt");
	private static FileWriter commandHistoryWriter;
	
	public CommandHistorySaver() {
		try {
			commandHistoryWriter = new FileWriter(commandHistory);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void SaveCommandHistory(String command) throws IOException {
		commandHistoryWriter.append(command + System.lineSeparator());
		commandHistoryWriter.flush();
	}
}
