import { Generator, GeneratorOptions } from "@chancejs/generator";
import { AnimalOptionTypeException } from "./exceptions";
import { NaturalGenerator } from "@chancejs/natural";
import { AnimalOptions,  AnimalTypes,  IAnimalGenerator } from "./interfaces";
import { animals } from "./constants";

export class AnimalGenerator extends Generator implements IAnimalGenerator {
  private naturalGenerator: NaturalGenerator;
constructor(options: GeneratorOptions) {
    super(options);
    this.naturalGenerator = new NaturalGenerator(options);
  }

  animal(options?: AnimalOptions): string {

    if (options?.type && !Object.values(AnimalTypes).includes(options?.type))
      throw new AnimalOptionTypeException();

   
    
    const type =  options?.type ?? Object.keys(animals)[ this.naturalGenerator.natural({max:Object.keys(animals).length - 1})] as AnimalTypes
    return animals[type][this.naturalGenerator.natural({max:animals[type].length -1})] 
  }
}
