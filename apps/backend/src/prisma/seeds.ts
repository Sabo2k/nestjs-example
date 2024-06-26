import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const alice = await prisma.user.upsert({
        where: { email: 'alice@mail.com' },
        update: {},
        create: {
            email: 'alice@mail.com',
            username: 'Alice',
            password: '1234567',
        },
    });

    const bob = await prisma.user.upsert({
        where: { email: 'bob@mail.com' },
        update: {},
        create: {
            email: 'bob@mail.com',
            username: 'Bob',
            password: '7654321',
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
