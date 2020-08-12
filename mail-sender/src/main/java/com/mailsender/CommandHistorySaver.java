package com.mailsender;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class CommandHistorySaver {
	
	private static final String commandHistoryFilePath = "C:\\Users\\Jan\\eclipse-workspace\\mail-sender" + "\\orderhistory.txt";
	private static FileWriter commandHistoryWriter;
	private static BufferedWriter appender;
	
	public CommandHistorySaver() {
		try {
			commandHistoryWriter = new FileWriter(new File(commandHistoryFilePath), true);
			appender = new BufferedWriter(commandHistoryWriter);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void SaveCommandHistory(String command) throws IOException {
		appender.write(command + System.lineSeparator());
	}
}
