import Mission from "@/components/company/Mission";
import Statement from "@/components/company/Statement";
import FinancialInfo from "@/components/company/FinancialInfo";
import Logo from "@/components/layout/Logo";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return (
    <div>
      <Logo />
      <Statement />
      <Mission />
      <FinancialInfo />
    </div>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://dgraham09:${encodeURIComponent(
      "Tokyo_2050",
    )}@cluster0.nwerivo.mongodb.net/?retryWrites=true&w=majority`,
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: JSON.parse(
        JSON.stringify(
          meetups.map((meetup) => ({
            id: meetup._id.toString(),
            title: meetup.data.title,
            image: meetup.data.image,
            address: meetup.data.address,
          })),
        ),
      ),
    },
    revalidate: 1,
  };
};

export default HomePage;
