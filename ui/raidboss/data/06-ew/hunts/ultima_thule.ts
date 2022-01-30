import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

// TODO: Fan Ail Death Sentence tankbuster

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.UltimaThule,
  triggers: [
    {
      id: 'Hunt Arch-Eta Energy Wave',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A85', source: 'Arch-Eta', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6A85', source: 'Erz-Eta', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6A85', source: 'Arch-Êta', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6A85', source: 'アーチイータ', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'Hunt Arch-Eta Sonic Howl',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A88', source: 'Arch-Eta', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6A88', source: 'Erz-Eta', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6A88', source: 'Arch-Êta', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6A88', source: 'アーチイータ', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Hunt Arch-Eta Tail Swipe',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A86', source: 'Arch-Eta', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6A86', source: 'Erz-Eta', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6A86', source: 'Arch-Êta', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6A86', source: 'アーチイータ', capture: false }),
      alertText: (_data, _matches, output) => output.getFront!(),
      outputStrings: {
        getFront: {
          en: 'Get Front',
          de: 'Geh nach Vorne',
          fr: 'Allez devant',
        },
      },
    },
    {
      id: 'Hunt Arch-Eta Fanged Lunge',
      type: 'Ability',
      // Before Heavy Stomp (6A87) cast.
      netRegex: NetRegexes.ability({ id: '6A8A', source: 'Arch-Eta', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '6A8A', source: 'Erz-Eta', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '6A8A', source: 'Arch-Êta', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '6A8A', source: 'アーチイータ', capture: false }),
      alarmText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Away from jump',
          de: 'Weg vom Sprung',
          fr: 'Éloignez-vous du saut',
        },
      },
    },
    {
      id: 'Hunt Arch-Eta Steel Fang',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A89', source: 'Arch-Eta' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6A89', source: 'Erz-Eta' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6A89', source: 'Arch-Êta' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6A89', source: 'アーチイータ' }),
      response: Responses.tankBuster('info'),
    },
    {
      id: 'Hunt Fan Ail Cyclone Wing',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6AF4', source: 'Fan Ail', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6AF4', source: 'Fan Ail', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6AF4', source: 'Fan Ail', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6AF4', source: 'ファン・アイル', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Hunt Fan Ail Plummet',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6AF2', source: 'Fan Ail', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '6AF2', source: 'Fan Ail', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '6AF2', source: 'Fan Ail', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '6AF2', source: 'ファン・アイル', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'Hunt Fan Ail Divebomb',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6AED', source: 'Fan Ail' }),
      netRegexDe: NetRegexes.startsUsing({ id: '6AED', source: 'Fan Ail' }),
      netRegexFr: NetRegexes.startsUsing({ id: '6AED', source: 'Fan Ail' }),
      netRegexJa: NetRegexes.startsUsing({ id: '6AED', source: 'ファン・アイル' }),
      alertText: (data, matches, output) => {
        if (data.me === matches.target)
          return output.divebombOnYou!();
        return output.divebombMarker!();
      },
      outputStrings: {
        divebombOnYou: {
          en: 'Divebomb on YOU',
          de: 'Sturzflug auf DIR',
          fr: 'Bombe plongeante sur VOUS',
        },
        divebombMarker: {
          en: 'Away from Divebomb Marker',
          de: 'Weg von dem Sturzflug-Marker',
          fr: 'Éloignez-vous de la bombe plongeante',
        },
      },
    },
  ],
};

export default triggerSet;
