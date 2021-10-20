import React, { PureComponent } from 'react';
import { Card } from "react-bootstrap"
import HeaderFile from './HeaderFile';
import Needs from "./files/Needs"
import GeneralInfo from "./files/GeneralInfo"
import Pictogramme from "./files/Pictogramme"
import Plannings from "./files/Plannings"
import Hygiene from "./files/Hygiene"
import Meal from "./files/Meal"
import Medical from "./files/Medical"
import Material from "./files/Material"
import Medications from "./files/Medications"

export class ComponentToPrint extends PureComponent {

    render() {
        let { widget, guestId, showUpdate } = this.props
        return (
            <>
                <Card>
                    <HeaderFile widget={widget} guestId={guestId} />
                    {widget === "Fiche besoins" &&
                        <Needs showUpdate={showUpdate} />
                    }
                    {widget === "Information générale" &&
                        <GeneralInfo showUpdate={showUpdate} />
                    }
                    {widget === "Pictogrammes" &&
                        <Pictogramme showUpdate={showUpdate} />
                    }
                    {widget === "Planning des résidents" &&
                        <Plannings showUpdate={showUpdate} />
                    }
                    {widget === "Fiche hygiène" &&
                        <Hygiene showUpdate={showUpdate} />
                    }
                    {widget === "Fiche repas" &&
                        <Meal showUpdate={showUpdate} />
                    }
                    {widget === "Fiche médicale" &&
                        <Medical showUpdate={showUpdate} />
                    }
                    {widget === "Matériel médical" &&
                        <Material showUpdate={showUpdate} />
                    }
                    {widget === "Traitement médicale" &&
                        <Medications showUpdate={showUpdate} />
                    }
                    {/* widget === "Contacts des abstreintes" => pages/abstreinte.jsx */}
                </Card>
            </>
        );
    }
}
