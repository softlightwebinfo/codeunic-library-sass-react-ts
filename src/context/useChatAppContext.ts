import * as React from 'react';
import ChatAppContext from "./ChatAppContext";

export default function useChatAppContext() {
    return React.useContext(ChatAppContext);
}
