/** @jsx jsx */
import { jsx } from 'theme-ui';
import {Button, Heading, Label, Select, Box, Text} from "theme-ui";

const CalculatorCard = ({
    label, myLevel, myService, myType,
    myUrgency,  myPages, levelsData, pagesData, serviceData,
    typesData, urgenciesData
}) => {
    const parseServiceSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmyservice(itemSelected.factor);
    };
    const parseTypeSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmytype(itemSelected.factor);
    };
    const parseUrgencySelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmyurgency(itemSelected.factor);
    };
    const parsePageSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmypages(itemSelected.factor);
    };
    const parseLevelSelected = (event) => {
        const valueToParse = event.target.value;
        const itemSelected = JSON.parse(valueToParse);
        setSelected(itemSelected);
        setmylevel(itemSelected.factor);
    };
    return (
        <div>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
                <Heading as="h3">Calculate Price</Heading>
                <Select name="sound" id="sound" mb={3}>
                    <option>Beep</option>
                </Select>
                <Select name="sound" id="sound" mb={3}>
                    <option>Beep</option>
                </Select>
                <Select name="sound" id="sound" mb={3}>
                    <option>Beep</option>
                </Select>
                <Select name="sound" id="sound" mb={3}>
                    <option>Beep</option>
                </Select>
                <Select name="sound" id="sound" mb={3}>
                    <option>Beep</option>
                </Select>
                <Box>
                    <Text>Minimum Price
                        : $ {(myService * myType * myUrgency * myPages* myLevel).toFixed(2)}</Text>
                </Box>
                <Button>Submit</Button>
            </Box>
        </div>
    );
};

export default CalculatorCard;