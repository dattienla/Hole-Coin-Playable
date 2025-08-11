using System;

namespace NaughtyAttributes
{
	[AttributeUsage(AttributeTargets.Field | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
	public class ShowIfAttribute : ShowIfAttributeBase
	{
		public ShowIfAttribute(string condition)
			: base(condition)
		{
			base.Inverted = false;
		}

		public ShowIfAttribute(EConditionOperator conditionOperator, params string[] conditions)
			: base(conditionOperator, conditions)
		{
			base.Inverted = false;
		}

		public ShowIfAttribute(string enumName, object enumValue)
			: base(enumName, enumValue as Enum)
		{
			base.Inverted = false;
		}
	}
}
