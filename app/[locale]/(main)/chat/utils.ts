export function singleConvParticipants(conversation: any, senderId: any) {
  let sender: any = null;
  let receiver: any = null;

  for (const p of conversation["participants"]) {
    if (p["_id"] === senderId) {
      sender = p;
    } else {
      receiver = p;
    }
  }

  return { sender, receiver };
}
