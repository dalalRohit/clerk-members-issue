'use client';
import {useOrganization} from '@clerk/nextjs';

export default function Home() {
  const {memberships}=useOrganization({
    memberships: {
      pageSize: 50
    },
    invitations: true
  });
  console.log('memberships:', memberships?.data);

  const derivedMemberships=memberships?.data?.map(m => m.publicUserData);
  console.log('derivedMemberships:', derivedMemberships);

  
  return <div>
    Home Page
    <pre>{JSON.stringify(derivedMemberships,null,4)}</pre>
  </div>;
}
