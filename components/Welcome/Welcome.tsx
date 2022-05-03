import { Title, Text } from "@mantine/core";
import useStyles from "./Welcome.styles";

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{" "}
        <Text inherit variant="gradient" component="span">
          heed
        </Text>
      </Title>
      {/* TODO: Inputbox here */}
    </>
  );
}
