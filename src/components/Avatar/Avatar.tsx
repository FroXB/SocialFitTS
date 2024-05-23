import React from 'react';
import { ImgHTMLAttributes } from 'react';
import * as Styles from './Avatar.styles.ts';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
    const StyledComponent = hasBorder ? Styles.AvatarWithBorder : Styles.Avatar;

    return (
        <StyledComponent
            {...props}
        />
    );
}
