// Purpose: Define the atom for the Recoil state management system.
import { atom, selector } from 'recoil';
import { TODOS } from "./todos";


export const networkAtom = atom({
    key: 'networkAtom',
    default: 104
});

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
});

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 12
});

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 0
});

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const messagingAtomCount = get(messagingAtom)
        const notificationsAtomCount = get(notificationsAtom)
        return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationsAtomCount

    }
})

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});

