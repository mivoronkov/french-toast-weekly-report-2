import { AvatarComponent } from '../avatar.component';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
jest.mock('../../../../../utils', () => {
    return {
        getImageIfSrcValid: () => {
            return Promise.resolve();
        },
    };
});

describe('Avatar tests', () => {
    it('Renders properly', () => {
        render(<AvatarComponent lastName='LastName' />);
    });
    it('Shows an image if link is valid', async () => {
        const dom = render(
            <AvatarComponent
                firstName='Alexander'
                lastName='Slesarenko'
                avatarPath='https://avatars.githubusercontent.com/u/3900938'
            />
        );
        await waitFor(() =>
            expect(dom.container.getElementsByTagName('img')).toHaveLength(1)
        );
    });
    it('Shows right letters', () => {
        render(<AvatarComponent lastName='LastName' />);
        expect(screen.getByText('LA')).toBeInTheDocument();
    });
});
