import { EventType } from "./types.js";
import { handleSessionStarted, handleSessionEnded } from "./handler.js";

export const dispatchEvent = (eventType, payload) => {
  console.log(`[Event Dispatcher] ${eventType}`, payload);

  switch (eventType) {
    case EventType.SESSION_STARTED:
      handleSessionStarted(payload);
      break;
    
    case EventType.SESSION_ENDED:
      handleSessionEnded(payload);
      break;

    default:
      console.warn(`[Event Dispatcher] Unknown event type: ${eventType}`);
  }
};
