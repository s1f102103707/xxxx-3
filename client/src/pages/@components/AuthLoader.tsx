import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { supabase } from 'src/utils/supabase';

export const AuthLoader = () => {
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const handleAuthStateChange = async (
      event: string,
      session: { user: { id: string }; access_token: string } | null
    ) => {
      if (event === 'SIGNED_OUT') {
        await handleSignedOut();
      } else if (event === 'SIGNED_IN' && session) {
        await handleSignedIn(session);
      }
    };

    const handleSignedOut = async () => {
      if (user?.id !== undefined) {
        await apiClient.api.private.session.$delete().catch(returnNull);
        setUser(null);
      }
    };

    const handleSignedIn = async (session: { user: { id: string }; access_token: string }) => {
      if (user?.id !== session.user.id) {
        await apiClient.api.private.users._userId(session.user.id)
          .$get()
          .catch(returnNull);
        setUser(fetchedUser);
      }
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(handleAuthStateChange);

    return () => subscription.unsubscribe();
  }, [user?.id, setUser]);

  return <></>;
};
