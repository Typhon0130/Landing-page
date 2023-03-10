import Layout from "../../components/layout";
import Images from "constants/img.constant";
import Table from "components/Table";
import { H1 } from "components/header";
import Button from "components/button";
import P from "components/paragraph";
import CheckBox from "@mui/material/Checkbox";

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
          {/* <Row flexDirection='column' alignItems='flex-start'>
            <Span borderRadius='5px' width='8vw' height='8vw' ></Span>
            <H4 position='absolute' bottom='3px' left='37px' >Tadashi</H4>
          </Row> */}
          <H1 fontSize="48px" fontWeight="700" lineHeight="67px">
            Contribuez au monde de la Defi
          </H1>
          <P width="45vw" fontSize="24px" fontWeight="400" lineHeight="34px">
            Zapper est votre porte vers le Web3. Visualisez l'ensemble de vos
            portefeuilles. Suivez les positions d'autres investisseurs.
            Découvrez de nouvelles collections de NFTs, DAOs et applications
            DeFi.
          </P>
          <Button>Connecter votre portefeuille</Button>
        </Column>
      </Row>
      <Layout paddingBottom="3rem" paddingTop="5rem">
        <Row paddingLeft="20px" paddingRight="20px">
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
                <Td>Azuki</Td>
                <Td>908</Td>
                <Td>01/21/2023</Td>
                <Td>
                  <CheckBox
                    sx={{
                      color: "#784ffe",
                      "&.Mui-checked": {
                        color: "#784ffe",
                      },
                    }}
                    defaultChecked
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>MG Land</Td>
                <Td>836</Td>
                <Td>02/02/2023</Td>
                <Td>
                  <CheckBox
                    sx={{
                      color: "#784ffe",
                      "&.Mui-checked": {
                        color: "#784ffe",
                      },
                    }}
                    defaultChecked
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>MG Land</Td>
                <Td>836</Td>
                <Td>02/02/2023</Td>
                <Td>
                  <CheckBox
                    sx={{
                      color: "#784ffe",
                      "&.Mui-checked": {
                        color: "#784ffe",
                      },
                    }}
                    defaultChecked
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>MG Land</Td>
                <Td>836</Td>
                <Td>02/02/2023</Td>
                <Td>
                  <CheckBox
                    sx={{
                      color: "#784ffe",
                      "&.Mui-checked": {
                        color: "#784ffe",
                      },
                    }}
                    defaultChecked
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>MG Land</Td>
                <Td>836</Td>
                <Td>02/02/2023</Td>
                <Td>
                  <CheckBox
                    sx={{
                      color: "#784ffe",
                      "&.Mui-checked": {
                        color: "#784ffe",
                      },
                    }}
                    defaultChecked
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Row>
      </Layout>
    </Layout>
  );
}
