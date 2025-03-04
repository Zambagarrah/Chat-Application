wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      const data = JSON.parse(message);
      switch (data.type) {
        case 'send-message':
          const { conversationId, messageText } = data.payload;
          // Store message in MongoDB with a self-destruct timestamp
          break;
        case 'message-received':
          // Check if the message has self-destructed
          break;
      }
    });
  });