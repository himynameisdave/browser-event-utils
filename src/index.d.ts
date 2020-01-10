export type EventType = Event & KeyboardEvent & { [index: string]: string };
export type EventHandler = (event: EventType) => void;
export type UserEventHandler = (fn: EventHandler) => EventHandler;

//  Alias for any type, to remind me to go fix later
//  Idea stolen from this awesome talk: https://www.youtube.com/watch?v=P-J9Eg7hJwE
export type $TSFixMe = any; // eslint-disable-line @typescript-eslint/no-explicit-any
