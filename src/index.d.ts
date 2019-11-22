export type EventHandler = (event: KeyboardEvent) => void;
export type UserEventHandler = (fn: EventHandler) => EventHandler;
