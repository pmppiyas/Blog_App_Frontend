import { authOptions } from '@/helper/authOptions';
import { getServerSession } from 'next-auth';

export const getUserSession = async () => await getServerSession(authOptions);
