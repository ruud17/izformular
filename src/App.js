import "./App.css";
import { Form, Card, Divider, Message } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { getSelectOptions, getMedzlisiOdMuftijstva } from "./helpers";
import {
  maritalStatuses,
  muftijstvaIMedzlisi,
  gender,
  yesNo,
  schoolGrade,
} from "./constants";

const App = () => {
  const [formValues, setFormValues] = useState({
    muftijstvo: "",
    medzlis: "",
    imeIPrezime: "",
    imeOca: "",
    imeDjeda: "",
    imeMajke: "",
    bracnoStanje: "", // brak ne treba
    spol: "", // brak ne treba
    datumRodjenja: "",
    mjestoRodjenja: "",
    sadasnjeDrzavljanstvo: "",
    drzavljanstvoPriRodjenju: "",
    adresa: "",
    adresaBroj: "",
    mjestoStanovanja: "",
    brojPoste: "",
    telefon: "",
    email: "",
    zaposlen: "",
    zanimanje: "",
    strucnaSprema: "",
    mjestoZavrsetkaSkole: "",
    adresaNaPoslu: "",
    telefonNaPoslu: "",
    brojPasosa: "",
    datumIzdavanjaPasosa: "",
    datumVazenjaPasosa: "",
    bedel: "",
    bedelIme: "",
    zeliDaPutujeSa: "", // brak ne treba
    imePratioca: "", // brak ne treba
  });

  const handleOnChange = (e, { name, value }) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDatepickerChange = (name, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form className='App'>
        <Card className='image'>
          <Card.Content>slika</Card.Content>
        </Card>
        <Form.Group>
          <Form.Select
            label='Muftijstvo'
            options={getSelectOptions(muftijstvaIMedzlisi, true)}
            placeholder='Odaberite muftijstvo'
            width={6}
            required
            name='muftijstvo'
            value={formValues.muftijstvo}
            onChange={handleOnChange}
          />
          <Form.Select
            label='Medžlis'
            options={getMedzlisiOdMuftijstva(formValues.muftijstvo)}
            placeholder='Odaberite medžlis'
            width={6}
            required
            name='medzlis'
            value={formValues.medzlis}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Ime i prezime'
            placeholder='Unesite Vaše ime i prezime'
            width={12}
            required
            name='imeIPrezime'
            value={formValues.imeIPrezime}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Ime oca'
            placeholder='Unesite ime oca'
            required
            width={4}
            name='imeOca'
            value={formValues.imeOca}
            onChange={handleOnChange}
          />
          <Form.Input
            label='Ime djeda'
            placeholder='Unesite ime djeda'
            required
            width={4}
            name='imeDjeda'
            value={formValues.imeDjeda}
            onChange={handleOnChange}
          />
          <Form.Input
            label='Ime majke'
            placeholder='Unesite ime majke'
            required
            width={4}
            name='imeMajke'
            value={formValues.imeMajke}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Select
            label='Bračno stanje'
            options={getSelectOptions(maritalStatuses)}
            placeholder='Odaberite bračno stanje'
            required
            width={6}
            name='bracnoStanje'
            value={formValues.bracnoStanje}
            onChange={handleOnChange}
          />
          <Form.Select
            label='Spol'
            options={getSelectOptions(gender)}
            placeholder='Odaberite spol'
            required
            width={6}
            name='spol'
            value={formValues.spol}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Field
            label='Datum rođenja'
            control={DatePicker}
            required
            selected={formValues.datumRodjenja}
            onChange={(date) => handleDatepickerChange("datumRodjenja", date)}
            dateFormat='dd MMMM yyyy'
            showYearDropdown={true}
            scrollableYearDropdown={true}
            yearItemNumber={100}
            yearDropdownItemNumber={100}
            maxDate={new Date()}
          />

          <Form.Input
            label='Mjesto rođenja'
            placeholder='Unesite mjesto rođenja'
            required
            width={6}
            name='mjestoRodjenja'
            value={formValues.mjestoRodjenja}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Sadašnje državljanstvo'
            placeholder='Unesite sadašnje državljanstvo'
            required
            width={6}
            name='sadasnjeDrzavljanstvo'
            value={formValues.sadasnjeDrzavljanstvo}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Državljanstvo pri rođenju'
            placeholder='Unesite državljanstvo pri rođenju'
            required
            width={6}
            name='drzavljanstvoPriRodjenju'
            value={formValues.drzavljanstvoPriRodjenju}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Adresa stanovanja'
            placeholder='Unesite adresu stanovanja'
            required
            width={6}
            name='adresa'
            value={formValues.adresa}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Broj ulice'
            placeholder='Unesite broj ulice'
            required
            width={6}
            name='adresaBroj'
            value={formValues.adresaBroj}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Mjesto stanovanja'
            placeholder='Unesite mjesto/grad stanovanja'
            required
            width={6}
            name='mjestoStanovanja'
            value={formValues.mjestoStanovanja}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Broj pošte'
            placeholder='Unesite broj pošte'
            required
            width={6}
            name='brojPoste'
            value={formValues.brojPoste}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Kontakt telefon'
            placeholder='Unesite broj telefona'
            required
            width={6}
            name='telefon'
            value={formValues.telefon}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Email adresa'
            placeholder='Unesite email'
            required
            width={6}
            name='email'
            value={formValues.email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Select
            label='Zaposlen'
            options={getSelectOptions(yesNo)}
            placeholder='Odaberite opciju'
            width={3}
            required
            name='zaposlen'
            value={formValues.zaposlen}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Zanimanje'
            placeholder='Unesite zanimanje'
            required
            width={3}
            name='zanimanje'
            value={formValues.zanimanje}
            onChange={handleOnChange}
          />

          <Form.Select
            label='Stručna sprema'
            options={getSelectOptions(schoolGrade)}
            placeholder='Odaberite opciju'
            width={3}
            required
            name='strucnaSprema'
            value={formValues.strucnaSprema}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Mjesto završetka škole'
            placeholder='Unesite mjesto završetka škole'
            required
            width={3}
            name='mjestoZavrsetkaSkole'
            value={formValues.mjestoZavrsetkaSkole}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Adresa na poslu'
            placeholder='Unesite adresu mjesta gdje radite'
            width={6}
            name='adresaNaPoslu'
            value={formValues.adresaNaPoslu}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Broj telefona na poslu'
            placeholder='Unesite broj telefona na mjestu gdje radite'
            width={6}
            name='telefonNaPoslu'
            value={formValues.telefonNaPoslu}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Broj pasoša'
            placeholder='Unesite broj pasoša'
            required
            width={4}
            name='brojPasosa'
            value={formValues.brojPasosa}
            onChange={handleOnChange}
          />

          <Form.Field
            label='Datum izdavanja pasoša'
            control={DatePicker}
            required
            selected={formValues.datumIzdavanjaPasosa}
            onChange={(date) =>
              handleDatepickerChange("datumIzdavanjaPasosa", date)
            }
            dateFormat='dd MMMM yyyy'
            showYearDropdown={true}
            scrollableYearDropdown={true}
            yearItemNumber={10}
            yearDropdownItemNumber={10}
            maxDate={new Date()}
          />

          <Form.Field
            label='Datum isteka pasoša'
            control={DatePicker}
            required
            selected={formValues.datumVazenjaPasosa}
            onChange={(date) =>
              handleDatepickerChange("datumVazenjaPasosa", date)
            }
            dateFormat='dd MMMM yyyy'
            showYearDropdown={true}
            scrollableYearDropdown={true}
            yearItemNumber={10}
            yearDropdownItemNumber={10}
          />
        </Form.Group>

        <Form.Group>
          <Form.Select
            label='Bedel'
            options={getSelectOptions(yesNo)}
            placeholder='Odaberite opciju'
            width={6}
            name='bedel'
            value={formValues.bedel}
            onChange={handleOnChange}
          />

          <Form.Input
            label='Ime i prezime'
            placeholder='Unesite ime i prezime za koga idete kao bedel'
            width={6}
            name='bedelIme'
            value={formValues.bedelIme}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Želi da putuje sa'
            placeholder='Unesite ime i prezime samo jedne osobe'
            width={12}
            name='zeliDaPutujeSa'
            value={formValues.zeliDaPutujeSa}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input
            label='Lični pratioc'
            placeholder='Unesite ime i prezime ličnog pratioca'
            width={6}
            name='imePratioca'
            value={formValues.imePratioca}
            onChange={handleOnChange}
          />

          <Form.Field
            label='Potpis pratioca'
            control={Message}
            width={6}
          ></Form.Field>
        </Form.Group>

        <Divider />
        <Form.Group
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Form.Field
            label='Potpis i pečat Muftijstva'
            control={Message}
            size='big'
            width={4}
            style={{ height: 100 + "px" }}
          />
          <Form.Field
            label='Potpis hadžije(ne smije preći izvan kvadrata)'
            control={Message}
            size='big'
            width={4}
            style={{ height: 100 + "px" }}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default App;
