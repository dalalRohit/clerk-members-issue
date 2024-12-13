import { CreateOrganization } from '@clerk/nextjs';
import Link from 'next/link';

export default function CreateOrganizationPage() {
  return (
    <>
      <Link href="/">Go back to main page</Link>
      <CreateOrganization />
    </>
  );
}
