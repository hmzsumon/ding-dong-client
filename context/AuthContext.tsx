'use client';

import { onAuthStateChanged, User } from 'firebase/auth';
import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from 'react';
import { auth } from '@/lib/firebase';

interface AuthContextType {
	user: User | null;
	loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});
		return () => unsub();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
