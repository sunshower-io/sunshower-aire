/**
 * @author    : Adarsh Pastakia
 * @version   : 5.0.0
 * @copyright : 2019
 * @license   : MIT
 */
import { Countries } from "sunshower-aire";

export class CountriesPage {
  protected countries = new Map();

  protected attached() {
    this.countries = [...Countries.list].sortBy(["continent", "name"]).groupBy("continent");
  }
}
