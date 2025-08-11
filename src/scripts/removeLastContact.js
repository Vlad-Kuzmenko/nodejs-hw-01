import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (!contacts.length) {
    console.log("You don't have contacts");
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
