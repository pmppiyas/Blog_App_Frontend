import Header from '@/components/ui/header';
import { getUserSession } from '@/helper/getUserSession';
import { IUser } from '@/interfaces';
import Image from 'next/image';

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session || !session.user) {
    return (
      <div className="space-y-6">
        <Header title="Profile" />
        <p className="text-center text-muted-foreground">User not logged in</p>
      </div>
    );
  }

  const user: IUser = session.user;

  return (
    <div className="space-y-6">
      <Header title="Profile" />
      <div className="flex flex-col items-center justify-center">
        <div className="border-2 rounded-full overflow-hidden">
          <Image alt={user.name} src={user.image ?? '/default.png'} width={80} height={100} />
        </div>
        <h2 className="text-3xl">Welcome {user.name}</h2>
        <h3 className="text-lg text-muted-foreground">{user.email}</h3>
      </div>
    </div>
  );
}