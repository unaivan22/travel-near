import React from 'react';
import { ExternalLink } from 'react-external-link';

export default function Footer() {
  return (
    <div className='border-t border-gray-200'>
        <div className='relative md:container mx-auto px-4 py-6'>
            <div class="grid grid-cols-5 gap-20">
                <div className='grid grid-cols-1 content-start'>
                    <div className='py-5'>
                        <img src='assets/media/Logo/logoFooter.png' />
                    </div>

                    <div className='font-semibold text-md text-gray-800 my-2'>
                        Need Vacation? What kind of place do you want? What you are looking for is here
                    </div>
                </div>
                
                <div className='grid grid-cols-1 content-start'>
                    <div className='py-5'>
                        <h1 className='font-bold text-xl'>Company</h1>
                    </div>

                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Blog</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Career</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Corporate</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Partner</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Elite Rewards</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Protection</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Instalment</ExternalLink>
                </div>

                <div className='grid grid-cols-1 content-start'>
                    <div className='py-5'>
                        <h1 className='font-bold text-xl'>Vacation</h1>
                    </div>

                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Beach</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Mount</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Lake</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Waterfall</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Urban</ExternalLink>
                </div>

                <div className='grid grid-cols-1 content-start'>
                    <div className='py-5'>
                        <h1 className='font-bold text-xl'>Support</h1>
                    </div>

                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Help Center</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Privacy Policy</ExternalLink>
                    <ExternalLink className='font-light text-sm text-gray-600 my-2' href="https://example.com"> Terms and conditions</ExternalLink>
                </div>

                <div className='grid grid-cols-1 content-start'>
                    <div className='py-5'>
                        <h1 className='font-bold text-xl'>Get App</h1>
                    </div>

                    <ExternalLink href='https://play.google.com/store/apps'>
                        <img className='my-2' src='assets/media/Logo/playstore.webp' />
                    </ExternalLink>
                    <ExternalLink href='https://apps.apple.com/'>
                        <img className='my-2' src='assets/media/Logo/appstore.webp' />
                    </ExternalLink>
                </div>
                
            </div>
        </div>
    </div>
  )
}
