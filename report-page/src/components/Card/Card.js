import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import {
  ActionButton,
  IButtonStyles,
  Icon,
  IIconStyles,
  Image,
  Persona,
  Stack,
  IStackTokens,
  Text,
  ITextStyles
} from 'office-ui-fabric-react';

const sectionStackTokens: IStackTokens = { childrenGap: 30 };
const cardTokens: ICardTokens = { childrenMargin: 12 };
const footerCardSectionTokens: ICardSectionTokens = { padding: '12px 0px 0px' };
const backgroundImageCardSectionTokens: ICardSectionTokens = { padding: 12 };
const agendaCardSectionTokens: ICardSectionTokens = { childrenGap: 0 };
const attendantsCardSectionTokens: ICardSectionTokens = { childrenGap: 6 };


export default class Card extends Component {
    
    Card = ({groups, expanded, collapsed}) => ( 
        <Stack horizontal tokens={sectionStackTokens}>
            <Card aria-label="Clickable vertical card with image bleeding at the top of the card" onClick={alertClicked} tokens={cardTokens}>
            <Card.Section fill verticalAlign="end" styles={backgroundImageCardSectionStyles} tokens={backgroundImageCardSectionTokens}>
            <Text variant="large" styles={dateTextStyles}>
                NOVEMBER
            </Text>
            <Text variant="superLarge" styles={dateTextStyles}>
                26
            </Text>
            </Card.Section>
            <Card.Section>
            <Text variant="small" styles={subduedTextStyles}>
                Category
            </Text>
            <Text styles={descriptionTextStyles}>Contoso marketing customer visit and survey results</Text>
            </Card.Section>
            <Card.Section tokens={agendaCardSectionTokens}>
            <Text variant="small" styles={descriptionTextStyles}>
                Tuesday 2:00-4:30 pm
            </Text>
            <Text variant="small" styles={subduedTextStyles}>
                Conf Room 34/1301
            </Text>
            </Card.Section>
            <Card.Item grow={1}>
            <span />
            </Card.Item>
            <Card.Section horizontal tokens={attendantsCardSectionTokens}>
            <ActionButton text="12 Attendees" styles={actionButtonStyles} />
            <ActionButton text="4 Accepted" styles={actionButtonStyles} />
            <ActionButton text="3 Declined" styles={actionButtonStyles} />
            </Card.Section>
            <Card.Section horizontal styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
            <Icon iconName="RedEye" styles={iconStyles} />
            <Icon iconName="SingleBookmark" styles={iconStyles} />
            <Stack.Item grow={1}>
                <span />
            </Stack.Item>
            <Icon iconName="MoreVertical" styles={iconStyles} />
            </Card.Section>
            </Card>
        </Stack>
    );
    
    render() {
        return (
          <this.Card/>
        )
      } 

}
