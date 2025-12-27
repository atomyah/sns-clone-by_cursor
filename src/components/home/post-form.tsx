'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ImageIcon,
  Smile,
} from 'lucide-react';

export function PostForm() {
  const [postContent, setPostContent] = useState('');

  return (
    <div className="p-4">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=100" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <textarea
            className="w-full min-h-[60px] resize-none bg-transparent text-xl placeholder:text-muted-foreground focus:outline-none"
            placeholder="いまどうしてる？"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <div className="flex items-center justify-between pt-3 mt-3">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-primary hover:bg-primary/10 shrink-0"
                title="メディア"
              >
                <ImageIcon className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-primary hover:bg-primary/10 shrink-0"
                title="GIF画像"
              >
                <div className="w-5 h-5 flex items-center justify-center text-xs font-bold">GIF</div>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-primary hover:bg-primary/10 shrink-0"
                title="絵文字"
              >
                <Smile className="w-5 h-5" />
              </Button>
            </div>
            <Button
              className="rounded-full font-bold px-4 md:px-6 text-sm md:text-base ml-auto shrink-0"
              disabled={!postContent.trim()}
            >
              ポストする
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

