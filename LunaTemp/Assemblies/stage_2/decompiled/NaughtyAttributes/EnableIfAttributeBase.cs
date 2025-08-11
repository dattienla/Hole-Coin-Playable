using System;

namespace NaughtyAttributes
{
	public abstract class EnableIfAttributeBase : MetaAttribute
	{
		public string[] Conditions { get; private set; }

		public EConditionOperator ConditionOperator { get; private set; }

		public bool Inverted { get; protected set; }

		public Enum EnumValue { get; private set; }

		public EnableIfAttributeBase(string condition)
		{
			ConditionOperator = EConditionOperator.And;
			Conditions = new string[1] { condition };
		}

		public EnableIfAttributeBase(EConditionOperator conditionOperator, params string[] conditions)
		{
			ConditionOperator = conditionOperator;
			Conditions = conditions;
		}

		public EnableIfAttributeBase(string enumName, Enum enumValue)
			: this(enumName)
		{
			if (enumValue == null)
			{
				throw new ArgumentNullException("enumValue", "This parameter must be an enum value.");
			}
			EnumValue = enumValue;
		}
	}
}
