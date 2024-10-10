import Text from "../../components/Text";
import { SIZES } from "../../styles";

export default function SectionTitle({ title, first = false }) {
  return (
    <Text
      bold
      fontsize={SIZES.mediumText}
      style={{ paddingTop: !first && 15, paddingBottom: 15 }}
      padVertical={0}
    >
      {title}
    </Text>
  );
}
