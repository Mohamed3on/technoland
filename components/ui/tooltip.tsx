'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Tip = ({
  content,
  children,
  className,
}: React.PropsWithChildren<{ content: string | React.ReactNode; className?: string }>) => {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100); // Small delay to allow moving cursor to content
  };

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <button
            type='button'
            className={cn('cursor-pointer', className)}
            onClick={() => setOpen(!open)}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            onTouchStart={() => setOpen(!open)}
            onKeyDown={(e) => {
              e.preventDefault();
              e.key === 'Enter' && setOpen(!open);
            }}
          >
            {children}
          </button>
        </TooltipTrigger>
        <TooltipContent
          className={cn(!content ? 'hidden' : '')}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <span className='inline-block select-text'>{content}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Tip };
