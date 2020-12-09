import React, { useEffect } from "react";
import TodosApp from "./TodosApp";
import LocalizationComponent from "../components/localizationComponent";
import { IntlProvider } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import messages from "../translations/common";
import { changeLang } from "../actions";

const LocalizationWrapper = (props) => {
  const { locale } = props.match.params;

  const dispatch = useDispatch();

  const r_locale = useSelector((state) => state.locale);
  console.log(r_locale);

  // useEffect(() => {
  //   dispatch(changeLang(r_locale));
  // }, [locale]);

  return (
    <>
      <h3>Localization wrapper</h3>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <LocalizationComponent />
        <TodosApp />
      </IntlProvider>
    </>
  );
};

export default LocalizationWrapper;
