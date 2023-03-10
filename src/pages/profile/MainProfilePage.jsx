import Layout from "../../components/layout";
import Images from "constants/img.constant";
import Table from "components/Table";
import Span from "components/Span";

export default function MainPage() {
  const { Row, Column } = Layout;
  const { Background } = Images;
  const { Tr, Th, Td, Tbody, Thead } = Table;

  return (
    <Layout width="100%" flex="0 0 85%"> 
      <Row backgroundImage={Background} textAlign="start" flexDirection="row">
        <Column
          display="block"
          paddingLeft="10vw"
          width="50vw"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <Row>
            <Span borderRadius='5px' width='500px' height='500px' ></Span>
          </Row>
        </Column>
      </Row>
      <Layout paddingBottom="10rem">
        <Row paddingLeft='20px' paddingRight="20px">
          <Table>
            <Thead>
              <Tr>
                <Th>Collections</Th>
                <Th>Price</Th>
                <Th>Date</Th>
                <Th>Active</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>1</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>2</Td>
                <Td>2</Td>
                <Td>2</Td>
              </Tr>
            </Tbody>
          </Table>
        </Row>
      </Layout>
    </Layout>
  );
}