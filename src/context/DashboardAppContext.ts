import * as React from 'react';
import {IChatAppState} from "../Interfaces/IChatAppState";

/**
 * @ignore - internal component.
 */
const ChatAppContext = React.createContext<IChatAppState>({});
ChatAppContext.displayName = 'ChatAppContext';
export default ChatAppContext;

