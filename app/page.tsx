'use client';
import {useOrganization} from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  const {memberships}=useOrganization({
    memberships: {
      pageSize: 50
    },
    invitations: true
  });
  const membersList=memberships?.data?.map(m => m.publicUserData);
  console.log('membersList:', membersList);  
  return <div>
    <Link href="/create-org" >Create Org</Link>
    <pre>{JSON.stringify(membersList,null,4)}</pre>
  </div>;
}
