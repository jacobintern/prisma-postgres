import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const getUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};

export default async function Home() {
  const users = await getUsers();

  console.log(users);

  return (
    <main>

    </main>
  )
}
