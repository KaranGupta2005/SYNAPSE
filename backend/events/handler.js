import { getIO } from "../sockets/index.js";

export const handleSessionStarted = (data) => {
  console.log("Handling SESSION_STARTED", data);
  
  const io = getIO();
  if (io && data.sessionId) {
    io.to(data.sessionId.toString()).emit("session:started", {
      sessionId: data.sessionId
    });
  }
};

export const handleSessionEnded = (data) => {
  console.log("Handling SESSION_ENDED", data);
  
  const io = getIO();
  if (io && data.sessionId) {
    io.to(data.sessionId.toString()).emit("session:ended", {
      sessionId: data.sessionId
    });
  }
};
