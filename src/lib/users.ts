import { prisma } from './prisma';

export async function getUserByUsername(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        _count: {
          select: {
            posts: true,
            followers: true,
            following: true,
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.error('ユーザー取得エラー:', error);
    return null;
  }
}

