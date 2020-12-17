(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["valks"],{2887:function(e,n,a){"use strict";a.r(n);var i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"valks"},[a("markdown-it-vue",{staticClass:"md-body",attrs:{content:e.content}})],1)},r=[],o='## Valkyries\n\nEn v4.4, il y a 59 battlesuits (38 _normales_, 14 _awakening_, 7 _augmented_) pour 13 personnages.\n\nLa colonne "A/C" est pour le "Soul **A**wakening" (la forme "d\'éveil" du personnage indiqué) ou pour la version amélioré avec un "Augment **C**ore" si entre parenthèses.\nQuand vous sélectionnez une valkyrie, sa forme alternative ne peut pas être utilisée en même temps dans le niveau.\n\n| Perso       | Code | Nom EN                    | Nom FR                             | Type      | Rang | A/C  |\n|------------:|:----:|---------------------------|------------------------------------|:---------:|:----:|:----:|\n| Kiana       | WC   | White Comet               | Comète Blanche                     | Mech      | B    | -    |\n|             | VR   | Valkyrie Ranger           | Ranger Valkyrie                    | Mech      | A    | -    |\n|             | DP   | Divine Prayer             | Prière Divine                      | Psy       | A    | -    |\n|             | KMB  | Knight Moonbeam           | Chevaleresse Rayon Lunaire         | Bio       | S    | -    |\n|             | HoV  | Herrscher of the Void     | Herrscher du Néant                 | Bio       | S    | KMB  |\n|             | VD   | Void Drifter              | Vagabond du Néant                  | Mech      | -    | (VR) |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Kallen      | RI   | Ritual Imayoh             | Rituel Imayoh                      | Mech      | A    | WC   |\n|             | SJ   | Sündenjäger               | Sündenjäger                        | Mech      | A    | VR   |\n|             | 6S   | Sixth Serenade            | Sixième Sérénade                   | Psy       | S    | DP   |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Mei         | CI   | Crimson Impulse           | Impulsion Écarlate                 | Bio       | B    | -    |\n|             | VB   | Valkyrie Bladestrike      | Valkyrie Bladestrike               | Bio       | A    | -    |\n|             | SD   | Shadow Dash               | Célérité d\'Ombre                   | Mech      | A    | -    |\n|             | LE   | Lightning Empress         | Impératrice Éclair                 | Psy       | S    | -    |\n|             | HoT  | Herrscher of Thunder      | Herrscher du Tonnerre              | Psy       | S    | -    |\n|             | SF   | Striker Fulminata         | Fulminata Percutrice               | Bio       | -    | (VB) |\n|             | DS   | Danzai Spectramancer      | Danzai Spectramancer               | Mech      | -    | (SD) |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Yae         | DJ   | Darkbolt Jonin            | Jonin Éclair Sombre                | Bio       | A    | -    |\n|             | Miko | Gyakushinn Miko           | Miko Gyakushinn                    | Bio       | A    | CI   |\n|             | FS   | Flame Sakitama            | Sakitama Enflammée                 | Bio       | A    | VB   |\n|             | Meme | Goushinnso Memento        | Goushinnso Memento                 | Mech      | S    | SD   |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Bronya      | VC   | Valkyrie Chariot          | Chariot de Valkyrie                | Psy       | B    | -    |\n|             | SS   | Snowy Sniper              | Sniper Enneigée                    | Bio       | A    | -    |\n|             | YA   | Yamabuki Armor            | Armure Yamabuki                    | Psy       | A    | -    |\n|             | DB   | Dimensional Breaker       | Briseuse Dimensionnelle            | Mech      | S    | -    |\n|             | WD   | Wolf\'s Dawn               | Aube du Loup                       | Psy       | A    | YA   |\n|             | BN   | Black Nucleus             | Noyau Sombre                       | Bio       | S    | SS   |\n|             | HoR  | Herrscher of Reason       | Herrscher de Raison                | Mech      | S    | DB   |\n|             | DK   | Drive Kometa              | Drive Kometa                       | Psy       | -    | (YA) |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Himeko      | BS   | Battle Storm              | Tempête de Bataille                | Bio       | B    | -    |\n|             | VT   | Valkyrie Triumph          | Triomphe de Valkyrie               | Bio       | A    | -    |\n|             | SF   | Scarlet Fusion            | Fusion Écarlate                    | Mech      | A    | -    |\n|             | BR   | Blood Rose                | Rose Sanglante                     | Psy       | S    | -    |\n|             | AK   | (Artic) Kriegsmesser      | Kriegsmesser                       | Psy       | A    | BS   |\n|             | VK   | Vermilion Knight: Eclipse | Chevalresse Vermillon : Éclipse    | Mech      | S    | SF   |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Theresa     | VP   | Valkyrie Pledge           | Promesse de Valkyrie               | Psy       | A    | -    |\n|             | SR   | Sakuno Rondo              | Sakuno Rondo                       | Psy       | A    | -    |\n|             | SA   | Starlit Astrologos        | Astrologos de l\'éclat stellaire    | Bio       | A    | -    |\n|             | VE   | Violet Executer           | Exécutrice Violette                | Mech      | S    | -    |\n|             | CH   | Celestial Hymn            | Hymne Céleste                      | Bio       | S    | -    |\n|             | LK   | Luna Kindred              | Luna Kindred                       | Bio       | A    | VP   |\n|             | TP   | Twilight Paladin          | Paladin du Crépuscule              | Mech      | -    | (VE) |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Fu Hua      | VA   | Valkyrie Accipiter        | Accipiter Valkyrie                 | Psy       | A    | -    |\n|             | NS   | Night Squire              | Écuyère Nocturne                   | Bio       | A    | -    |\n|             | SK   | Shadow Knight             | Chevalresse d\'Ombre                | Mech      | S    | -    |\n|             | PX   | Phoenix                   | Phénix                             | Psy       | S    | -    |\n|             | AE   | Azure Empyrea             | Empyrée Azur                       | Psy       | S    | PX   |\n|             | HoF  | Hawk of the Fog           | Aigle du brouillard                | Psy       | -    | (VA) |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Rita        | UR   | Umbral Rose               | Rose Ombrale                       | Psy       | A    | -    |\n|             | PI   | Stalker: Phantom Iron     | Fer Fantôme                        | Mech      | A    | -    |\n|             | AKA  | Argent Knight: Artemis    | Chevalresse d\'Argent : Artemis     | Bio       | S    | -    |\n|             | FR   | Fallen Rosemary           | Rosemary déchue                    | Quantum   | S    | -    |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Liliya      | BB   | Blueberry Blitz           | Myrtille Blitz                     | Mech      | A    | -    |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Rozaliya    | MC   | Molotov Cherry            | Cerise Molotov                     | Psy       | S    | -    |\n|             | FT   | Fervent Tempo Δ           | Fervent Tempo Δ                    | Psy       | -    | (MC) |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Seele       | SP   | Swallowtail Phantasm      | Fantasme de Machaon                | Quantum   | A    | -    |\n|             | SN   | Stygian Nymph             | Nymphe Stygienne                   | Quantum   | S    | -    |\n| &nbsp;      |      |                           |                                    |           |      |      |\n| Durandal    | VG   | Valkyrie Gloria           | Valkyrie Gloria                    | Quantum   | A    | -    |\n|             | BK   | Bright Knight: Excelsis   | Chevaleresse de lumière : Excelsis | Mech      | S    | -    |\n|             | DA   | Dea Anchora               | Dea Anchora                        | Bio       | S    | -    |\n',s={name:"valks",metaInfo:{title:"Liste des valkyries - HI3",meta:[{vmid:"description",name:"description",content:"Une liste des valkyries d'Honkai Impact 3rd avec les noms en anglais et français."}]},data:function(){return{content:o}}},t=s,l=a("2877"),m=Object(l["a"])(t,i,r,!1,null,null,null);n["default"]=m.exports}}]);