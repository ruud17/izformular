import React, { useState } from "react";
import {
  Form,
  Message,
  Divider,
  Grid,
  Button,
  Header,
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
    bracnoStanje: "",
    spol: "",
    datumRodjenja: "",
    mjestoRodjenja: "",
    sadasnjeDrzavljanstvo: "",
    drzavljanstvoPriRodjenju: "",
    adresa: "",
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
    zeliDaPutujeSa: "",
    imePratioca: "",
  });

  const handleOnChange = (e, { name, value }) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "muftijstvo") {
      setFormValues((prevState) => ({
        ...prevState,
        medzlis: "",
      }));
    }
  };

  const handleDatepickerChange = (name, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const disablePdfBtn = () => {
    if (
      !formValues.muftijstvo ||
      !formValues.medzlis ||
      !formValues.imeIPrezime ||
      !formValues.imeOca ||
      !formValues.imeDjeda ||
      !formValues.imeMajke ||
      !formValues.datumRodjenja ||
      !formValues.mjestoRodjenja ||
      !formValues.sadasnjeDrzavljanstvo ||
      !formValues.drzavljanstvoPriRodjenju ||
      !formValues.adresa ||
      !formValues.mjestoStanovanja ||
      !formValues.brojPoste ||
      !formValues.telefon ||
      !formValues.email ||
      !formValues.zaposlen ||
      !formValues.zanimanje ||
      !formValues.strucnaSprema ||
      !formValues.mjestoZavrsetkaSkole ||
      !formValues.brojPasosa ||
      !formValues.datumIzdavanjaPasosa ||
      !formValues.datumVazenjaPasosa ||
      !formValues.mjestoStanovanja ||
      !formValues.mjestoStanovanja ||
      !formValues.mjestoStanovanja ||
      !formValues.mjestoStanovanja ||
      (travelType === travelTypes.single &&
        (!formValues.bracnoStanje || !formValues.spol))
    ) {
      return true;
    }
    return false;
  };

  const ref = React.createRef();

  return (
    <div className='form-pdf-section'>
      <div ref={ref}>
        <Message size='small' color='blue'>
          Aplikacijski formular za odlazak na hadž (<b>{formOwner}</b>)
        </Message>
        <Form>
          <div>
            <Grid divided='vertically'>
              <Grid.Row>
                <Grid.Column width={4}>
                  <div className='left-corner'>slika</div>
                </Grid.Column>
                <Grid.Column width={12}>
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
                      disabled={!formValues.muftijstvo}
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

                  <Form.Group>
                    <Form.Input
                      label='Ime oca'
                      placeholder='Unesite ime oca'
                      required
                      width={5}
                      name='imeOca'
                      value={formValues.imeOca}
                      onChange={handleOnChange}
                    />
                    <Form.Input
                      label='Ime djeda'
                      placeholder='Unesite ime djeda'
                      required
                      width={5}
                      name='imeDjeda'
                      value={formValues.imeDjeda}
                      onChange={handleOnChange}
                    />
                    <Form.Input
                      label='Ime majke'
                      placeholder='Unesite ime majke'
                      required
                      width={6}
                      name='imeMajke'
                      value={formValues.imeMajke}
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          {travelType === travelTypes.single && (
            <Form.Group>
              <Form.Select
                label='Bračno stanje'
                options={getSelectOptions(maritalStatuses)}
                placeholder='Odaberite bračno stanje'
                required
                width={5}
                name='bracnoStanje'
                value={formValues.bracnoStanje}
                onChange={handleOnChange}
              />
              <Form.Select
                label='Spol'
                options={getSelectOptions(gender)}
                placeholder='Odaberite spol'
                required
                width={7}
                name='spol'
                value={formValues.spol}
                onChange={handleOnChange}
              />
            </Form.Group>
          )}

          <Form.Group>
            <Form.Field
              label='Datum rođenja'
              control={DatePicker}
              required
              width={4}
              selected={formValues.datumRodjenja}
              onChange={(date) => handleDatepickerChange("datumRodjenja", date)}
              dateFormat='dd.MM.yyyy'
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
              width={4}
              name='mjestoRodjenja'
              value={formValues.mjestoRodjenja}
              onChange={handleOnChange}
            />
            <Form.Input
              label='Sadašnje državljanstvo'
              placeholder='Unesite sadašnje državljanstvo'
              required
              width={4}
              name='sadasnjeDrzavljanstvo'
              value={formValues.sadasnjeDrzavljanstvo}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Državljanstvo pri rođenju'
              placeholder='Unesite državljanstvo pri rođenju'
              required
              width={4}
              name='drzavljanstvoPriRodjenju'
              value={formValues.drzavljanstvoPriRodjenju}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Input
              label='Adresa stanovanja'
              placeholder='Unesite ulicu i broj'
              required
              width={6}
              name='adresa'
              value={formValues.adresa}
              onChange={handleOnChange}
            />

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
              label='Poštanski broj'
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
              type='number'
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
              width={5}
              name='zaposlen'
              value={formValues.zaposlen}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Zanimanje'
              placeholder='Unesite zanimanje'
              required
              width={6}
              name='zanimanje'
              value={formValues.zanimanje}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Adresa na poslu'
              placeholder='Unesite adresu mjesta gdje radite'
              width={6}
              disabled={formValues.zaposlen !== "Da"}
              name='adresaNaPoslu'
              value={formValues.adresaNaPoslu}
              onChange={handleOnChange}
            />

            <Form.Input
              type='number'
              label='Broj telefona na poslu'
              placeholder='Unesite br. tel. mjesta gdje radite'
              width={6}
              disabled={formValues.zaposlen !== "Da"}
              name='telefonNaPoslu'
              value={formValues.telefonNaPoslu}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Select
              label='Stručna sprema'
              options={getSelectOptions(schoolGrade)}
              placeholder='Odaberite opciju'
              required
              width={5}
              name='strucnaSprema'
              value={formValues.strucnaSprema}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Mjesto završetka škole'
              placeholder='Unesite mjesto završetka škole'
              required
              width={7}
              name='mjestoZavrsetkaSkole'
              value={formValues.mjestoZavrsetkaSkole}
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
              dateFormat='dd.MM.yyyy'
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
              dateFormat='dd.MM.yyyy'
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
              width={5}
              name='bedel'
              value={formValues.bedel}
              onChange={handleOnChange}
            />

            <Form.Input
              label='Ime i prezime'
              placeholder='Unesite ime i prezime za koga idete kao bedel'
              width={11}
              name='bedelIme'
              value={formValues.bedelIme}
              onChange={handleOnChange}
            />
          </Form.Group>

          {travelType === travelTypes.single && (
            <>
              <Form.Group widths='equal'>
                <Form.Input
                  label='Želi da putuje sa'
                  placeholder='Unesite ime i prezime samo jedne osobe'
                  name='zeliDaPutujeSa'
                  value={formValues.zeliDaPutujeSa}
                  onChange={handleOnChange}
                />

                <Form.Input
                  label='Lični pratioc'
                  placeholder='Unesite ime i prezime ličnog pratioca'
                  name='imePratioca'
                  value={formValues.imePratioca}
                  onChange={handleOnChange}
                />
                <Form.Field
                  label='Potpis pratioca'
                  control={Message}
                ></Form.Field>
              </Form.Group>
            </>
          )}

          <Form.Group style={{ display: "flex" }} widths='equal'>
            <Form.Field
              label='Potpis i pečat Muftijstva'
              control={Message}
              size='massive'
              style={{ margin: 0 }}
            />
            <Form.Field
              label='Potpis hadžije (ne smije preći izvan kvadrata)'
              control={Message}
              size='massive'
              style={{ margin: 0 }}
            />
          </Form.Group>
        </Form>
      </div>
      <div>
        <Pdf
          targetRef={ref}
          filename={`${formValues.imeIPrezime}-prijava-za-hadz.pdf`}
          x={10}
          y={5}
          scale={1}
        >
          {({ toPdf }) => (
            <Button
              disabled={disablePdfBtn()}
              primary
              icon='file pdf'
              floated='right'
              onClick={toPdf}
              content='Sačuvaj kao PDF'
            />
          )}
        </Pdf>
        <Header as='h5' floated='right' className='note'>
          Polja označena sa <span style={{ color: "red" }}> * </span> su
          obavezna!
        </Header>
      </div>
    </div>
  );
};

export default FormComp;
