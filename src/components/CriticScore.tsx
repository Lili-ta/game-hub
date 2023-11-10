import { Badge } from "@chakra-ui/react";
interface Props {
  metacritic: number;
}
const CriticScore = ({ metacritic }: Props) => {
  const color = metacritic > 70 ? "green" : metacritic > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} borderRadius={2}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
