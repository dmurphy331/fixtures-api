import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Fixture } from "./../types/Fixture";

interface FixtureListProps {
  fixtures?: Fixture[];
}

export default function FixtureList(props: FixtureListProps) {
  const { fixtures } = props;

  return (
    <Container maxWidth="md">
      {fixtures.map((fixture) => (
        <div>
          <Typography variant="h6" component="h6">
            {fixture.matchfixture}
          </Typography>
          <Typography variant="body1" component="p">
            {fixture.date} - {fixture.kickoff}
          </Typography>
          <Typography variant="body1" component="p">
            {fixture.competition}
          </Typography>
          <Typography variant="body1" component="p">
            {fixture.channels}
          </Typography>
          <Divider />
        </div>
      ))}
    </Container>
  );
}
