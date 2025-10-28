export async function getFees() {
  try {
    const getFeesResponse = await fetch(`${process.env.API_URL}/default/fee`);
    if (getFeesResponse.ok) {
      const fees: FeesInterface = await getFeesResponse.json();
      return fees;
    }
    throw new Error("Something went wrong");
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
      return null;
    }
    console.log("Unknown server error, please try again");
    return null;
  }
}
