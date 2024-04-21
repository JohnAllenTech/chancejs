import { Generator } from "@chancejs/generator";
import { AnimalOptionTypeException } from "./exceptions";
import { AnimalOptions,  AnimalTypes,  IAnimalGenerator } from "./interfaces";
import { animals } from "./constants";
import {pickOne} from '@chancejs/pick'

export class AnimalGenerator extends Generator implements IAnimalGenerator {

  animal(options?: AnimalOptions): string {
    if (options?.type && !Object.values(AnimalTypes).includes(options?.type))
      throw new AnimalOptionTypeException();
    return pickOne(animals[options?.type ?? pickOne(Object.keys(animals)) as AnimalTypes])
      }
}
