import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { apiRoutes } from "~/app/api-routes";
import { findIndexByKey, hasByKey } from "~/app/utils/collections";

const apiListAtom = atom<any[]>([]);
const optimListAtom = atom<any[]>([]);

const allListAtom = atom((get) => {
  let list = [...get(optimListAtom)];

  let apiList = get(apiListAtom);

  for (let i = 0; i < apiList.length; ++i) {
    let conv = apiList[i];
    if (!hasByKey(list, conv)) {
      list.push(conv);
    }
  }

  return list;
});

export function useLoadConvList() {
  const setList = useSetAtom(apiListAtom);

  useEffect(() => {
    apiRoutes.getConversations().then((conversations) => {
      setList(conversations);
    });
  }, [setList]);
}

export function useGetConversations() {
  return useAtomValue(allListAtom);
}

export function useRegisterConv() {
  const [optimList, setOptimList] = useAtom(optimListAtom);
  const allList = useAtomValue(allListAtom);

  return useCallback(
    (newConversation: any) => {
      if (hasByKey(allList, newConversation)) {
        return;
      }

      setOptimList([newConversation, ...optimList]);
    },
    [setOptimList, allList, optimList]
  );
}

export function useFocusConv() {
  const [optimListPrev, setOptimList] = useAtom(optimListAtom);

  return useCallback(
    (conversation: any, lastMessage: string) => {
      let optimList = [...optimListPrev];
      let index = findIndexByKey(optimList, conversation);
      if (index >= 0) {
        // move to top
        let conv = optimList.splice(index, 1)[0];
        // update message
        conv.lastMessage = lastMessage;
        optimList.unshift(conv);
      } else {
        // create at top
        let conv = { ...conversation };
        // update message
        conv.lastMessage = lastMessage;
        optimList.unshift(conv);
      }
      setOptimList(optimList);
    },
    [setOptimList, optimListPrev]
  );
}
