'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  Pin,
} from 'lucide-react';
import type { Post } from '@/types/post';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <article className="p-4 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 transition-colors cursor-pointer group">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={post.user.avatar} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              {post.pinned && (
                <Pin className="w-4 h-4 text-muted-foreground shrink-0" />
              )}
              <span className="font-bold hover:underline truncate">
                {post.user.name}
              </span>
              <span className="text-muted-foreground text-sm shrink-0">
                {post.user.username}
              </span>
              <span className="text-muted-foreground text-sm shrink-0">
                ·
              </span>
              <span className="text-muted-foreground text-sm shrink-0">
                {post.timestamp}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 shrink-0"
              title="その他"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-base mb-3 leading-normal">
            {post.content}
          </p>

          {post.images && post.images.length > 0 && (
            <div className="mb-3 rounded-2xl overflow-hidden border border-muted relative w-full aspect-auto max-h-96">
              <Image
                src={post.images[0]}
                alt="post"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}

          {post.hasLink && (
            <div className="mb-3 border rounded-2xl overflow-hidden hover:bg-muted/50 p-3 bg-muted/30">
              <p className="text-sm text-blue-600 font-medium">
                {post.link}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between max-w-md text-xs text-muted-foreground">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-2 hover:text-primary hover:bg-primary/10"
              title="返信"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{post.replies}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-2 hover:text-green-600 hover:bg-green-600/10"
              title="リポスト"
            >
              <Repeat2 className="w-4 h-4" />
              <span>{post.retweets}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-2 hover:text-red-600 hover:bg-red-600/10"
              title="いいね"
            >
              <Heart className="w-4 h-4" />
              <span>{post.likes}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-2 hover:text-primary hover:bg-primary/10"
              title="共有"
            >
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

