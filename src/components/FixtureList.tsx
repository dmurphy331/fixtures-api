interface FixtureListProps {
  fixtures?: any;
}

interface Fixture {
  date: string;
  matchfixture: string;
  competition: string;
  kickoff: string;
  channels: string;
}

export default function FixtureList(props: FixtureListProps) {
  const { fixtures } = props;

  return (
    <>
      {fixtures.map((fixture: Fixture) => (
        <div>
          <p>{fixture.date}</p>
          <p>{fixture.matchfixture}</p>
          <p>{fixture.competition}</p>
          <p>{fixture.kickoff}</p>
          <p>{fixture.channels}</p>
        </div>
      ))}
    </>
  );
}
