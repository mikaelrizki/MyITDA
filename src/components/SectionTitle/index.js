import Text from "../../components/Text";
import { SIZES } from "../../styles";

export default function SectionTitle({ title }) {
  return (
    <Text bold fontsize={SIZES.mediumText} style={{ paddingTop: 15 }}>
      {title}
    </Text>
  );
}
