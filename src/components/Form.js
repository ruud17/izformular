import React, { useState } from "react";
import {
  Form,
  Card,
  Message,
  Divider,
  Header,
  Button,
  Image,
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { getSelectOptions, getMedzlisiOdMuftijstva } from "../helpers";
import {
  maritalStatuses,
  muftijstvaIMedzlisi,
  gender,
  yesNo,
  schoolGrade,
  travelTypes,
} from "../constants";
import Pdf from "react-to-pdf";

const FormComp = ({ travelType, formOwner }) => {
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

  const ref = React.createRef();

  return (
    <div className='form-pdf-section'>
      <div ref={ref}>
        <Message size='small' color='blue'>
          Aplikacijski formular za odlazak na hadž (<b>{formOwner}</b>)
        </Message>

        <Divider />
        <Form>
          <div className='img-basic-info'>
            <div className='left-corner'>slika</div>
            <div>
              <Form.Group widths='equal'>
                <Form.Select
                  label='Muftijstvo'
                  options={getSelectOptions(muftijstvaIMedzlisi, true)}
                  placeholder='Odaberite muftijstvo'
                  required
                  name='muftijstvo'
                  value={formValues.muftijstvo}
                  onChange={handleOnChange}
                />
                <Form.Select
                  label='Medžlis'
                  options={getMedzlisiOdMuftijstva(formValues.muftijstvo)}
                  placeholder='Odaberite medžlis'
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
                  width={16}
                  required
                  name='imeIPrezime'
                  value={formValues.imeIPrezime}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Input
                  label='Ime oca'
                  placeholder='Unesite ime oca'
                  required
                  name='imeOca'
                  value={formValues.imeOca}
                  onChange={handleOnChange}
                />
                <Form.Input
                  label='Ime djeda'
                  placeholder='Unesite ime djeda'
                  required
                  name='imeDjeda'
                  value={formValues.imeDjeda}
                  onChange={handleOnChange}
                />
                <Form.Input
                  label='Ime majke'
                  placeholder='Unesite ime majke'
                  required
                  name='imeMajke'
                  value={formValues.imeMajke}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </div>
          </div>
          <Divider />

          <Form.Group>
            <Form.Select
              label='Bračno stanje'
              options={getSelectOptions(maritalStatuses)}
              placeholder='Odaberite bračno stanje'
              required
              name='bracnoStanje'
              value={formValues.bracnoStanje}
              onChange={handleOnChange}
            />
            <Form.Select
              label='Spol'
              options={getSelectOptions(gender)}
              placeholder='Odaberite spol'
              required
              name='spol'
              value={formValues.spol}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group widths='equal'>
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
              name='mjestoRodjenja'
              value={formValues.mjestoRodjenja}
              onChange={handleOnChange}
            />
            <Form.Input
              label='Sadašnje državljanstvo'
              placeholder='Unesite sadašnje državljanstvo'
              required
              name='sadasnjeDrzavljanstvo'
              value={formValues.sadasnjeDrzavljanstvo}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Državljanstvo pri rođenju'
              placeholder='Unesite državljanstvo pri rođenju'
              required
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
              width={8}
              name='adresa'
              value={formValues.adresa}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Broj ulice'
              placeholder='Unesite br. ulice'
              required
              width={4}
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
              width={8}
              name='mjestoStanovanja'
              value={formValues.mjestoStanovanja}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Broj pošte'
              placeholder='Unesite br. pošte'
              required
              width={4}
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
              required
              name='zaposlen'
              value={formValues.zaposlen}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Zanimanje'
              placeholder='Unesite zanimanje'
              required
              name='zanimanje'
              value={formValues.zanimanje}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Select
              label='Stručna sprema'
              options={getSelectOptions(schoolGrade)}
              placeholder='Odaberite opciju'
              required
              name='strucnaSprema'
              value={formValues.strucnaSprema}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Mjesto završetka škole'
              placeholder='Unesite mjesto završetka škole'
              required
              width={12}
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
              width={4}
              name='telefonNaPoslu'
              value={formValues.telefonNaPoslu}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Input
              label='Broj pasoša'
              placeholder='Unesite broj pasoša'
              required
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
              width={4}
              name='bedel'
              value={formValues.bedel}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Ime i prezime'
              placeholder='Unesite ime i prezime za koga idete kao bedel'
              width={12}
              name='bedelIme'
              value={formValues.bedelIme}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Input
              label='Želi da putuje sa'
              placeholder='Unesite ime i prezime samo jedne osobe'
              name='zeliDaPutujeSa'
              width={8}
              value={formValues.zeliDaPutujeSa}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Input
              label='Lični pratioc'
              placeholder='Unesite ime i prezime ličnog pratioca'
              name='imePratioca'
              value={formValues.imePratioca}
              onChange={handleOnChange}
            />

            <Form.Field label='Potpis pratioca' control={Message}></Form.Field>
          </Form.Group>

          <Form.Group style={{ display: "flex" }} widths='equal'>
            <Form.Field
              label='Potpis i pečat Muftijstva'
              control={Message}
              size='big'
              style={{ height: 100 + "px" }}
            />
            <Form.Field
              label='Potpis hadžije (ne smije preći izvan kvadrata)'
              control={Message}
              size='big'
              style={{ height: 100 + "px" }}
            />
          </Form.Group>
        </Form>
      </div>
      <div>
        <Pdf
          targetRef={ref}
          filename={`${formValues.imeIPrezime}-prijava-za-hadz.pdf`}
          x={5}
          y={2}
          scale={0.8}
        >
          {({ toPdf }) => (
            <Button
              primary
              icon='file pdf'
              floated='right'
              onClick={toPdf}
              content='Sačuvaj kao PDF'
            />
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default FormComp;
