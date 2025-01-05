import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

// Define the types for PlaidLinkProps and PlaidLinkOptions
interface PlaidLinkProps {
    user: any; // Replace `any` with the correct type for the user
    variant: 'primary' | 'ghost'; // Variants for the button
}

interface PlaidLinkOnSuccess {
    (public_token: string): void;
}

interface PlaidLinkOptions {
    token: string;
    onSuccess: PlaidLinkOnSuccess;
}

export const PlaidLink = ({ user, variant }: PlaidLinkProps) => {

    const router = useRouter();
    const [token, setToken] = useState<string>('');

    // Function to fetch the link token
    useEffect(() => {
        const getLinkToken = async () => {
            try {
                // Uncomment and implement createLinkToken with user
                const data = await createLinkToken(user); 
                setToken(data?.getLinkToken);
            } catch (error) {
                console.error('Error fetching link token', error);
            }
        }

        if (user) {
            getLinkToken(); // Ensure this is only called when user is available
        }
    }, [user]);

    // Success callback when the user successfully links their bank account
    const onSuccess = useCallback(async (public_token: string) => {
        try {
            // Uncomment and implement the exchangePublicToken function
            // await exchangePublicToken({ publicToken: public_token, user });
            router.push('/'); // Redirect after success
        } catch (error) {
            console.error('Error exchanging public token', error);
        }
    }, [user]);

    // PlaidLink options
    const config: PlaidLinkOptions = {
        token,
        onSuccess
    };

    return (
        <>
            {variant === 'primary' ? (
                <Button className="plaidlink-primary">
                    Connect Bank
                </Button>
            ) : variant === 'ghost' ? (
                <Button>
                    Connect bank
                </Button>
            ) : (
                <Button>
                    Connect bank
                </Button>
            )}
        </>
    );
};
